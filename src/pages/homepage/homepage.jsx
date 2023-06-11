import React from "react";



import EastIcon from '@mui/icons-material/East';
function HomePage(){
    return(
        <div>
            <div className="body">
                
                <div className="hero">
                    <a href="" className="left">
                        <p>Brands Everyone’s Crushing on</p>
                        <h3>Explore All<EastIcon /></h3>
                    </a>
                    <div className="right">
                        <div className="right-top">
                            <a href="">
                            <p>456 Items</p>
                            <h3>Footwear<EastIcon /></h3>
                            </a>
                        </div>
                        
                        <div className="right-down">
                            <a href="" className="right-down-left">
                                <p>680 Items</p>
                                <h3>Sweaters<EastIcon /></h3>
                            </a>
                            <a href="" className="right-down-right">
                                <p>341 Items</p>
                                <h3>Demins<EastIcon /></h3>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;