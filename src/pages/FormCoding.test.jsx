import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";

describe('FormCoding', () =>{
    test('renders FormCoding component', () => {
        render(<FormCoding/>)
        // screen.debug();
        expect(screen.getByText(/Nama Lengkap/)).toBeInTheDocument();
        expect(screen.getByText(/Email/)).toBeInTheDocument();
    });

    test('VALID TEST | valid name and email', () => {
        render(<FormCoding/>)
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /nama/i}),
            {target: {value: "sabrina"}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /email/i}),
            {target: {value: "sabrina23@gmail.com"}}
        );

        //expect
        expect(screen.getByLabelText(/Nama/)).toHaveValue("sabrina")
        expect(screen.getByLabelText(/Email/)).toHaveValue("sabrina23@gmail.com")
    });

    test('INVALID TEST | invalid name and email', () => {
        render(<FormCoding/>)
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /nama/i}),
            {target: {value: "sabrina23"}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /email/i}),
            {target: {value: "sabrina23gmail.com"}}
        );

        //expect
        expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama/)).toHaveValue("sabrina23")
        expect(screen.getByLabelText(/Email/)).toHaveValue("sabrina23gmail.com")
    });

    test('VALID TEST | show alert when valid data submitted', () => {
        render(<FormCoding/>)
        jest.spyOn(window, 'alert').mockImplementation(() => {})

        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /nama/i}),
            {target: {value: "sabrina"}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /email/i}),
            {target: {value: "sabrina23@gmail.com"}}
        );
        fireEvent.input(
            screen.getByTestId(
                "noHandphone",
                {name: /noHandphone/i}),
            {target: {value: 123123123}}
        );
        //submit
        fireEvent.submit(screen.getByText("Submit"));

        //expect
        expect(window.alert).toBeCalledWith(`Data Pendaftar "sabrina" Berhasil Diterima`);
        // expect(screen.getByLabelText(/Nama/)).toHaveValue("sabrina");
        // expect(screen.getByLabelText(/Email/)).toHaveValue("sabrina23@gmail.com");
        // expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123123123);
    })

    test('INVALID TEST | show alert when invalid data submitted', () => {
        render(<FormCoding/>)
        jest.spyOn(window, 'alert').mockImplementation(() => {})

        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /nama/i}),
            {target: {value: "sabrina23"}}
        );
        fireEvent.input(
            screen.getByRole(
                "textbox", 
                {name: /email/i}),
            {target: {value: "sabrina23gmail.com"}}
        );
        
        //submit
        fireEvent.submit(screen.getByText("Submit"))

        //expect
        expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai")
        expect(screen.getByLabelText(/Nama/)).toHaveValue("sabrina23")
        expect(screen.getByLabelText(/Email/)).toHaveValue("sabrina23gmail.com")
    });
    
})