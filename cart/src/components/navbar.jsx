import { CartDropdown } from "./cartDropdown"

export const Navbar = () => {
    return (
        // component
        <header className="bg-white px-12">
            <div className="container flex items-center mx-auto px-4 py-4">

                {/* logo */}
                <div className="mr-auto">
                    <h3 className="logo font-medium text-lg">tobypedia</h3>
                </div>

                {/* Search bar */}
                <div className="w-10/12 max-w-xs justify-between items-center rounded-md bg-gray-100
                xl:flex xl:max-w-lg">
                    <select className="mr-4 p-2.5 bg-transparent text-sm font-bold" name="" id="">
                        <option value="">ALL CATEGORIES</option>
                    </select>

                    <input 
                        className="border-l border-gray-300 bg-transparent pl-4 text-sm"
                        type="text" name="" id="" placeholder="I'm looking for ..."/>
                    <i className="ri-search-line mr-5"></i>
                </div>

                {/* icons */}
                <nav className="contents">
                    <div className="ml-4 flex items-center justify-end xl:w-48">
                        <div class="relative ml-2 inline-block lg:ml-4">
                            <button >
                                <CartDropdown/>
                            </button>
                        </div>
                        <div className="relative ml-2 inline-block lg:ml-4">
                            <button>
                                <i className="ri-notification-3-line"></i>
                            </button>
                        </div>
                        <div className="relative ml-2 inline-block lg:ml-4">
                            <button>
                                <i className="ri-account-circle-fill"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}