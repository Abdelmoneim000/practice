export default function Questions(props) {
    return (
        <form action="">
            {props.page === 1 && <div className="page">
                <p>What's your full name?</p>
                <p>"Please enter your first and last name as they appear on your ID."</p>
                <input type="text" name="name" />
                <br />

                <div className="radio-btns">
                <p>What's your gender?</p>
                <label >
                <input type="radio" name="gender" value="Male"/>
                Male</label>
                <label>
                <input type="radio" name="gender" value="Female"/>
                Female</label>
                <label>
                <input type="radio" name="gender" value="Prefer not to say"/>
                Prefer not to say</label>
                </div>
                <br />

                <div className="check-box">
                    <p>Which devices do you use daily?</p>
                    <p>"choose all possible choices"</p>
                    <label>
                        <input type="checkbox"  name="devices" value="Laptop"/>
                        Laptop
                    </label>
                    <label>
                        <input type="checkbox" name="devices" value="Smartphone"/>
                        Smartphone
                    </label>
                    <label>
                        <input type="checkbox" name="devices" value="Tablet"/>
                        Tablet
                    </label>
                    <label>
                        <input type="checkbox" name="devices" value="All" />
                        All
                    </label>
                </div>
            </div>}

            {props.page === 2 && <div className="page">
                <label className="date">Select your date of birth
                    <input type="date" />
                </label>
                <br />
                <label htmlFor="study-hrs">How many hours do you study per week?</label>
                <input type="number"
                        name="studyHours"
                        id="study-hrs"
                        min="0"
                        max="100" />
                <br />
                <div className="check-box">
                    <p>Which languages are you learning?</p>
                    <p>"choose all possible choices"</p>
                    <label>
                        <input type="checkbox"  name="languages" value="Arabic"/>
                        Arabic
                    </label>
                    <label>
                        <input type="checkbox" name="languages" value="English"/>
                        English
                    </label>
                    <label>
                        <input type="checkbox" name="languages" value="French"/>
                        French
                    </label>
                    <label>
                        <input type="checkbox" name="languages" value="Spanich" />
                        Spanich
                    </label>
                </div>
            </div>}

        </form>
    )
}