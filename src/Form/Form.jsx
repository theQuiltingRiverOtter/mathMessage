import { useState, useEffect } from 'react'
import InputMathType from "./InputMathType"
import InputMessage from "./InputMessage"
import InputTimesTables from "./InputTimesTables"
import InputCheck from './InputCheck'
import FormButton from "./FormButton"
import "../styles/form.css"

export default function Form({ updateData, submitData, data, checkLoaded, isLoaded }) {
    return (
        <form onSubmit={submitData} autoComplete='off'>
            {!isLoaded && <InputMessage updateData={updateData} />}
            <InputCheck checkLoaded={checkLoaded} />
            <InputMathType updateData={updateData} />
            {(data.mathType == 'multiplication' || data.mathType == 'multAndDiv') &&

                <InputTimesTables updateData={updateData} />}
            <FormButton btnText="Encode" />
        </form>
    )
}