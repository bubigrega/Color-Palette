import React from "react";
import InitialPalettes from "./InitialPalletes";
import Palette from "./Palette";
import create from "./createPaletteHelper";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";

class App extends React.Component {
  pickPalette(id) {
    return create(InitialPalettes.find(p => p.id === id));
  }
  render() {
    // let palette = create(ColorPalettes[0]);
    return (
      <div className="App">
        <CssBaseline />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PaletteList InitialPalettes={InitialPalettes} />}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette {...this.pickPalette(routeProps.match.params.id)} />
            )}
          />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
