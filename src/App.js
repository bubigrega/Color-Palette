import React from "react";
import InitialPalettes from "./InitialPalletes";
import Palette from "./Palette";
import create from "./createPaletteHelper";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColor from "./SingleColor";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pickColorVariants = this.pickColorVariants.bind(this);
  }
  pickPalette(id) {
    return create(InitialPalettes.find(p => p.id === id));
  }
  pickColorVariants(paletteId, colorId) {
    let colorVariants = [];
    let palette = this.pickPalette(paletteId).colors;
    for (let item in palette) {
      colorVariants.push(palette[item].find(c => c.id === colorId));
    }
    return colorVariants;
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
              <PaletteList InitialPalettes={InitialPalettes} {...routerProps} />
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
            render={routeProps => (
              <SingleColor
                colors={this.pickPalette(routeProps.match.params.paletteId)}
                colorId={routeProps.match.params.colorId}
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
