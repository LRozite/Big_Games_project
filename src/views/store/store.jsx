import React, {Component} from 'react'

class StorePage extends Component {
    render(){
        const title = <h1>An title</h1> ;
        return (
          <div>
            {title}
            store page is this
            <button
                id="storeButton"
                className="my_storeBtn"
                onClick={(e) => {
                    console.log(e);
                }}
            >button</button>
        </div>
        )
    }
}

export default StorePage;