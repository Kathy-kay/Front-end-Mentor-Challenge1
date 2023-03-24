const Content = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-image-container">
                    <div className="hero-image-content">
                        {
                            window.innerWidth <= 750 ?<img src="/images/mobile.jpg" alt="" className="hero-img"/>
                            :<img src="/images/hero.jpg" className="hero-img"/>
                        }
                        <div className="img-content">
                            <div className="img-title">
                                <h1>The Bright <br /> Future of <br /> Web 3.0?</h1>
                            </div>
                            <div className="img-par">
                                <p>We dive into the next evolution of the web that <br /> claims
                                    to put the power of the platform back <br /> into the hands of 
                                    of the people. But is it really <br /> fulfilling its promise?
                                </p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-new">
                    <div className="hero-new-content">
                        <h1>New</h1>
                        <div className="content first">
                        <h3>Hydrogen VS Eectric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVS</p>
                        </div>
                        <div className="content second">
                            <h3>The Downsides of AI Artistry</h3>
                            <p>What are the adverse effects of on-demand
                                AI image generation?
                            </p>
                        </div>
                        <div className="content">
                            <h3>Is VC Funding DryingUp?</h3>
                            <p>Private funding by VC firms is down 50% YOY. 
                                We take a look at what that means.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="hero-categories"></div>
                        <div className="category-content">
                            <div className="category-img">
                                <img src="/images/retro.jpg" alt="" />
                                <div className="category-content">
                                    <h2>01</h2>
                                    <h3>Reviving Retro PCs</h3>
                                    <p>What happens when old pcs are given
                                        modern upgrades?
                                    </p>
                                </div>
                            </div>
                            <div className="category-img">
                                <img src="/images/retro.jpg" alt="" />
                                <div className="category-content">
                                    <h2>01</h2>
                                    <h3>Reviving Retro PCs</h3>
                                    <p>What happens when old pcs are given
                                        modern upgrades?
                                    </p>
                                </div>
                            </div>
                            <div className="category-img">
                                <img src="/images/retro.jpg" alt="" />
                                <div className="category-content">
                                    <h2>01</h2>
                                    <h3>Reviving Retro PCs</h3>
                                    <p>What happens when old pcs are given
                                        modern upgrades?
                                    </p>
                                </div>
                            </div>
                        </div>
        </div>
    );
}
 
export default Content;