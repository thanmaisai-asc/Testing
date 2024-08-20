import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");  //ul
    expect(listElement).toBeInTheDocument();
  });

  test("renders alist of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem") //li
    expect(listItemElements).toHaveLength(skills.length)
  });

  //getByRole --gets the node in the dom

  test('renders login button', ()=>{
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button",{name:"Login"}) //li
    expect(loginButton).toBeInTheDocument();

  })
//queryByRole--asserts if the button is not in the dom
  test('start learning btn isnt rendered',()=>{
    render(<Skills skills={skills} />);
    const startlearningButton = screen.queryByRole("button",{name:"start learning"}) //li
    expect(startlearningButton).not.toBeInTheDocument();
  })

//findByRole  -- node will be displayed after some time
  test('start learning btn eventually rendered',async ()=>{
    render(<Skills skills={skills} />);
    const startlearningButton = await screen.findByRole(
        "button",{name:"start learning"},
    {
        timeout:2000
    }) //li
    expect(startlearningButton).toBeInTheDocument();
  })
});
