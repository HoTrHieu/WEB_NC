export default function Search() {
    return (
        <div>
            <div id="mu-search">
                <div className="mu-search-area">
                    <button className="mu-search-close"><span className="fa fa-close"></span></button>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form className="mu-search-form">
                                     <input type="search" placeholder="Type Your Keyword(s)  Hit Enter"/>               
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}