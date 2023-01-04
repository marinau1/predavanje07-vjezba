import { Component } from "react";
import Cars from "./Cars";
import Button from "./Button";

class App extends Component
{
      state = [
        {   
            brand : "Ford",
            model: "Mustang",
          },
      
          {
            brand : "Audi",
            model: "A6",
          },
      
          {
            brand : "Tesla",
            model: "1005",
          }
        ];


        addNewCar = () => {
            const {cars} = this.state;

            const newCar = {
              brand: "BMW",
              model: "118d"
            }

            this.setState({
              cars: [...cars, newCar]
            });
        }

        render(){
          const {cars} = this.state;
          return (
          <>
          <Cars cars = {cars} />
          <Button clickListener={this.addNewCar}>Dodaj novi auto</Button>
          </>
        );

        
      }
  }


export default App;

