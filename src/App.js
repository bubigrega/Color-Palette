import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Route } from "react-router-dom";

import InitialPalettes from "./InitialPalletes";
import create from "./createPaletteHelper";

import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColor from "./SingleColor";
import Page from "./Page";
import CreatePalette from "./CreatePalette";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: JSON.parse(localStorage.getItem("palettes")) || InitialPalettes
    };
    this.pickColorVariants = this.pickColorVariants.bind(this);
    this.addPalette = this.addPalette.bind(this);
    this.savePalettes = this.savePalettes.bind(this);
    this.handleDeletePalette = this.handleDeletePalette.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
  }
  pickPalette(id) {
    const palette = this.state.palettes.find(p => p.id === id);

    if (palette === undefined) {
      return create(this.state.palettes[0]);
    }
    return create(palette);
  }
  pickColorVariants(paletteId, colorId) {
    let colorVariants = [];
    let palette = this.pickPalette(paletteId).colors;
    for (let item in palette) {
      colorVariants.push(palette[item].find(c => c.id === colorId));
    }
    return colorVariants;
  }
  addPalette(palette) {
    this.setState(
      state => ({ palettes: [...state.palettes, palette] }),
      () => {
        this.savePalettes();
      }
    );
  }
  savePalettes() {
    localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  handleDeletePalette(id) {
    this.setState(
      s => ({ palettes: s.palettes.filter(p => p.id !== id) }),
      () => this.savePalettes()
    );
  }
  handleRestore() {
    this.setState(
      state => ({ palettes: InitialPalettes }),
      () => {
        this.savePalettes();
      }
    );
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={500} key={location.key}>
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={routerProps => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        {...routerProps}
                        handleDeletePalette={this.handleDeletePalette}
                        handleRestore={this.handleRestore}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/new"
                  render={routerProps => (
                    <Page>
                      <CreatePalette
                        {...routerProps}
                        addPalette={this.addPalette}
                        palettes={this.state.palettes}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <Page>
                      <Palette
                        {...this.pickPalette(routeProps.match.params.id)}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routerProps => (
                    <Page>
                      <SingleColor
                        {...routerProps}
                        colors={this.pickPalette(
                          routerProps.match.params.paletteId
                        )}
                        colorId={routerProps.match.params.colorId}
                      />
                    </Page>
                  )}
                />
                <Page>
                  <Route render={() => <h1>404</h1>} />
                </Page>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
