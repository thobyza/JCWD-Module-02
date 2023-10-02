
function FilterApp() {
    return (
        <div className="h-screen bg-violet-600 pt-20">
            <div className="flex-col justify-center items-center mx-auto w-2/5 rounded-lg bg-white	">
                <div>
                    <div className="flex items-center justify-center mb-4">
                        <p>Search: </p>
                        <input className="shadow appearance-none border ml-3" type="text"/>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1.5">
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Banana</div>
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Apple</div>
                        {/* <div className="max-w-min p-1.5 rounded-md bg-violet-200">Orange</div>
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Mango</div>
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Pineapple</div>
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Watermelon</div>
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Strawberry</div>
                        <div className="max-w-min p-1.5 rounded-md bg-violet-200">Persimmon</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterApp;