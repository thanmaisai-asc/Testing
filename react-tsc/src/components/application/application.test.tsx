import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('application', ()=>{
    test('renders correctly', ()=>{
        render(<Application/>)
        const nameElement = screen.getByRole("textbox",{
            name:"Name",
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement1 = screen.getByLabelText('Name')
        expect(nameElement1).toBeInTheDocument()

        const bioElement = screen.getByRole("textbox",{
            name:"Bio"
        })
        expect(bioElement).toBeInTheDocument()

    //    // screen.getByRole('button', {  name: /submit/i})

        const submitbuttonElement = screen.getByRole("button")
        expect(submitbuttonElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()

        const heading1 = screen.getByRole("heading",{level:1})
        expect(heading1).toBeInTheDocument()

        const heading2 = screen.getByRole("heading",{level:2})
        expect(heading2).toBeInTheDocument()
    })

        


})