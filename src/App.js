import React from "react";
import InitialPalettes from "./InitialPalletes";
import Palette from "./Palette";
import create from "./createPaletteHelper";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  pickPalette(pallete, index) {
    return create(pallete[index]);
  }
  render() {
    // let palette = create(ColorPalettes[0]);
    return (
      <div className="App">
        <CssBaseline />
        <Switch>
          <Route exact path="/" render={() => <p>pick a palette U+1F1E6</p>} />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                {...this.pickPalette(
                  InitialPalettes,
                  routeProps.match.params.id
                )}
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
