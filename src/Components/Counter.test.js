import { render } from "react-dom"
import Counter from "./Counter"

describe("should have counter",()=>{

 it("should redner",()=>{
  render(<Counter>Increament</Counter>); //virtually
  let button = screen.getByText("Click Me"); //document.getElementById()
  expect(button).toBeInTheDocument();
 })
})