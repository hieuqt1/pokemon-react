import Card from './Card'
import './PokeNameForm.css'

export default function PokeNameForm() {
    return (
        <Card>
            <form className='form'>
                <label>What is your name?</label>
                <input type='name'></input>
            </form>
            <button type="submit">Welcome</button>
        </Card>)
}