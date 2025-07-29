export default function UserInput(props) {
    return (
        <section id="user-input">
            <div className="input-group">

                <div>
                    <div>
                        <label>Initial Investment
                        <input type="number" label={props.label} value={props.value} onChange={props.value} />
                        </label>
                    </div>

                    <div>
                        <label>Annual Investment
                        <input type="number" label={props.label} value={props.value} onChange={props.value} />
                        </label>
                    </div>
                </div>


                <div>
                    <div>
                        <label>Expected Return
                        <input label={props.label} value={props.value} onChange={props.value} />
                        </label>
                    </div>


                    <div>
                        <label>Duration
                        <input label={props.label} value={props.value} onChange={props.value} />
                        </label>
                    </div>
                </div>

            </div>
        </section>
    )
}