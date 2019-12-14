import React from "react";
import InitialPalettes from "./InitialPalletes";
import Palette from "./Palette";
import create from "./createPaletteHelper";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColor from "./SingleColor";

import "./App.css";
import CreatePalette from "./CreatePalette";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: InitialPalettes
    };
    this.pickColorVariants = this.pickColorVariants.bind(this);
    this.addPalette = this.addPalette.bind(this);
  }
  pickPalette(id) {
    return create(this.state.palettes.find(p => p.id === id));
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
    this.setState(state => ({ palettes: [...state.palettes, palette] }));
  }
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <PaletteList palettes={this.state.palettes} {...routerProps} />
            )}
          />
          <Route
            exact
            path="/palette/new"
            render={routerProps => (
              <CreatePalette
                {...routerProps}
                addPalette={this.addPalette}
                palettes={this.state.palettes}
              />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette {...this.pickPalette(routeProps.match.params.id)} />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routerProps => (
              <SingleColor
                {...routerProps}
                colors={this.pickPalette(routerProps.match.params.paletteId)}
                colorId={routerProps.match.params.colorId}
              />
            )}
          />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
