import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


class MultiChain extends Component {
    render() { 
        return (
            <>
            <center>
                <div className="firstContain">
                       <div className="imgcen">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 169.3 169.3"><path d="M167.2 84.7c0-45.5-37-82.6-82.5-82.6S2.1 39.1 2.1 84.7s37 82.6 82.6 82.6c36 0 66.7-23.2 77.9-55.5h0v-.1c2.9-8.5 4.6-17.5 4.6-27zm-7.5 9.9c-.9-3.2-2.1-6.5-3.7-9.7l-1.8-3.5c-3.3-5.8-11.5-23-32.8-33.1h0l-7.3 8.2h0l3.5-10.1h0c-.1 0-17.3-7.2-22.4-5.4h0l-1.8 9.9h0L91 40.8h0s-11.9-2-24.1 1.8h0l5 9.8s0 .1 0 0c-.7-.2-6.9-1.7-11.8 9.7h0l-44-9.1 1.7 1 36 17.7h0s-21.5 31.5-22 33.4c0 0-5.8 13 12.8 14.3 0 0 9.8-.7 37-12.1 0 0 3.2-1.1 6.5-3.5-3.4 2.6-6.8 3.6-6.8 3.6s14.3 10.3 4.3 32.5c-5.7 12.5-18.2 15-28.1 14.9-28.5-10.6-48.6-38-48.6-70.1 0-41.8 33.9-75.8 75.8-75.8s75.8 33.9 75.8 75.8c-.1 3.3-.3 6.6-.8 9.9zM76.2 79.7l-11 8.2s-3.4-4.1 1-7.5c0 .1 4.4-3.1 10-.7z" fill="none" stroke-linejoin="round" stroke-miterlimit="10" /></svg>
                            <span className="dgs" style={{fontSize:11}}>UNICRYPT</span>
                            
                            {/* <img src="/Images/firstpage.jpeg"  className="imgCenter" alt="" /> */}
                            <h1>MULTI CHAIN DECENTRALIZED <span style={{ fontWeight: '800' }}> PROTOCOLS &</span><span style={{ fontWeight: '800'}}> SERVICES </span></h1>
                       </div>
                        <div className="p">
                             <p>Started in June 2020, Unicrypt provides an ever-growing suite of decentralized services. The objective is to bring value to the DeFi space as a whole by delivering disruptive, flexible and audited technology. Strengthen your project and reward your communities using our services.</p>
                        </div>
                        <div className="btc">
                                <button className="bt btg">Launch App</button>
                        </div>
                        <div>
                            <q>
                                <cite>
                                     Our vision is simple. Automation is scalability, and protocols are trust. Welcome to Unicrypt!
                                </cite>
                                <span><br/>
                                    <strong className="dg">Unicrypt Team</strong>
                                </span>
                            </q>
                        </div>
                     
                            <div>
                                <div>
                                    <strong className="sub">Blockchains</strong>
                                </div>
                                <div className="block_padding">
                                    <span className="dgs">Blockchains</span>
                                    <h2 className="h2" style={{fontSize:33}}>SUPPORTED BLOCKCHAINS</h2>
                                </div>
                            </div>
                </div>
           {/* /////////////////fourphoto///////////// */}
                <div className="flxfourimg">
                    
                        {/* <img src="Images/firstpage.jpeg" alt="" /> */}
                    <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="Smart_Chain" viewBox="0 0 332.5 332.3" stroke-miterlimit="10"><path d="M114.3 144.8l52-52 52 52 30.3-30.3-82.3-82.3L84 114.5l30.3 30.3m-81.9 21.3l30.3-30.3L93 166.1l-30.3 30.3-30.3-30.3zm81.9 21.4l52 52 52-52 30.3 30.2h0L166.3 300 84 217.8h0l30.3-30.3m125.4-21.3l30.3-30.3 30.3 30.3-30.3 30.3-30.3-30.3z" /><path d="M197 166.1h0l-30.7-30.7-22.7 22.7h0l-2.6 2.6-5.4 5.4h0 0l30.7 30.7 30.7-30.7" /></svg>
                           <div>
                                <p class="dg" style={{fontSize:20}}>Binance Smart Chain</p>
                            </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="Smart_Chain" viewBox="0 0 332.5 332.3" stroke-miterlimit="10"><path d="M166.2 217.7l83-49.1-83-137.6" /><path d="M166.2 31L83.3 168.6l82.9 49.1V131zm0 270.2l83-116.8-83 49" /><path d="M166.2 301.2v-67.8l-82.9-49zm83-132.6l-83-37.6m0 0l-82.9 37.6" /></svg>
                        <div>
                            <p class="dg"  style={{fontSize:20}}>Ethereum</p>
                        </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="Smart_Chain" viewBox="0 0 332.5 332.3" stroke-miterlimit="10"><path d="M289.7 152.7c-2.3-1.3-5.2-1.3-7.8 0l-18.1 10.7-12.3 6.8-17.8 10.7c-2.3 1.3-5.2 1.3-7.8 0l-13.9-8.4c-2.3-1.3-3.9-3.9-3.9-6.8v-16.2c0-2.6 1.3-5.2 3.9-6.8l13.9-8.1c2.3-1.3 5.2-1.3 7.8 0l13.9 8.4c2.3 1.3 3.9 3.9 3.9 6.8v10.7l12.3-7.1v-11c0-2.6-1.3-5.2-3.9-6.8L234 120.4c-2.3-1.3-5.2-1.3-7.8 0l-26.5 15.5c-2.6 1.3-3.9 3.9-3.9 6.5v30.4c0 2.6 1.3 5.2 3.9 6.8l26.2 15.2c2.3 1.3 5.2 1.3 7.8 0l17.8-10.3 12.3-7.1 17.8-10.3c2.3-1.3 5.2-1.3 7.8 0l13.9 8.1c2.3 1.3 3.9 3.9 3.9 6.8v16c0 2.6-1.3 5.2-3.9 6.8l-13.6 8.1c-2.3 1.3-5.2 1.3-7.8 0l-13.9-8.1c-2.3-1.3-3.9-3.9-3.9-6.8v-10.3l-12.3 7.1v10.7c0 2.6 1.3 5.2 3.9 6.8l26.2 15.2c2.3 1.3 5.2 1.3 7.8 0l26.2-15.2c2.3-1.3 3.9-3.9 3.9-6.8v-30.7c0-2.6-1.3-5.2-3.9-6.8l-26.2-15.3zM93.8 195.6l27-15.5V149" /><path d="M75.7 155.4h0m45.1-37.6v96.7l27 15.5m-.1-96.7v96.6l27-15.5v-96.6" /><path d="M147.7 102.3l-27 15.5 27 15.5 27-15.5-27-15.5zm-81 77.6l27 15.5.1-31m-81-46.6v96.6l27 15.5" /><path d="M39.8 102.3l-27 15.5 80.9 46.7 12.2-7.1 14.7-8.5-80.8-46.6zm0 62.2V230l27-15.5V180l-27-15.5z" /></svg>
                        <div>
                            <p class="dg"  style={{fontSize:20}}>Matic/Polygon</p>
                        </div>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="Smart_Chain" viewBox="0 0 332.5 332.3" stroke-miterlimit="10"><path d="M59.8 102.3H145V59.7H59.8zm127.7 0h85.2V59.7h-85.2zm85.2 85.1h-42.6V230h-42.6v42.6h85.2zM145 272.6V230h-42.6v-42.6H59.8v85.2z" /></svg>
                        <div>
                            <p class="dg"  style={{fontSize:20}}>xDai Chain</p>
                        </div>
                    </div>




                        {/* <img src="Images/firstpage.jpeg"  alt="" />
                        <img src="Images/firstpage.jpeg"  alt="" />
                        <img src="Images/firstpage.jpeg" alt="" />
                     */}
                </div>
                <div style={{backgroundColor:'#06090D',paddingBottom:'20%'}} className="width">
                    <div>
                        <p className="pp">Originally deployed on the Ethereum network, our services are now operational on multiple chains, allowing projects, communities and token developers to utilize the suitable tools for them.</p>
                        <p>
                            <strong className="strongpp">We believe the future of the entire cryptocurrency industry is multi chain.</strong>
                        </p>
                    </div>
                </div>
               
                <div>
                    <div>
                        <strong className="sub">Our tools</strong>
                    </div>
                    
                    <div className="block_padding">
                        <span className="dgs" style={{fontSize:12}}>our tools</span>
                        <h2 className="h2" style={{fontSize:33}}>SERVICES AND CAPABILITIES</h2>
                    </div>
                </div>
               
                
{/* .......................components............ */}
                <div className="col-12 row">
                    <div className="col-12 col-lg-6 partLIQ">
                        <span className="dgs dgLI">LIQUIDITY</span>
                        <h2 className="h2">LIQUIDITY LOCKERS</h2>
                        <h1>Project developers are welcomed to use our security feature allowing them to lock their liquidity provider tokens.</h1>
                        <h1>Locking liquidity is becoming a standard in the DeFi industry, and we are proud to re-affirm this concept was brought to the market by Unicrypt.</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="LIQLogo" viewBox="0 0 169.3 169.3"><path d="M167.2 84.7c0-45.5-37-82.6-82.5-82.6S2.1 39.1 2.1 84.7s37 82.6 82.6 82.6c36 0 66.7-23.2 77.9-55.5h0v-.1c2.9-8.5 4.6-17.5 4.6-27zm-7.5 9.9c-.9-3.2-2.1-6.5-3.7-9.7l-1.8-3.5c-3.3-5.8-11.5-23-32.8-33.1h0l-7.3 8.2h0l3.5-10.1h0c-.1 0-17.3-7.2-22.4-5.4h0l-1.8 9.9h0L91 40.8h0s-11.9-2-24.1 1.8h0l5 9.8s0 .1 0 0c-.7-.2-6.9-1.7-11.8 9.7h0l-44-9.1 1.7 1 36 17.7h0s-21.5 31.5-22 33.4c0 0-5.8 13 12.8 14.3 0 0 9.8-.7 37-12.1 0 0 3.2-1.1 6.5-3.5-3.4 2.6-6.8 3.6-6.8 3.6s14.3 10.3 4.3 32.5c-5.7 12.5-18.2 15-28.1 14.9-28.5-10.6-48.6-38-48.6-70.1 0-41.8 33.9-75.8 75.8-75.8s75.8 33.9 75.8 75.8c-.1 3.3-.3 6.6-.8 9.9zM76.2 79.7l-11 8.2s-3.4-4.1 1-7.5c0 .1 4.4-3.1 10-.7z" fill="none" stroke-linejoin="round" stroke-miterlimit="10" /></svg>

                         {/* <img src="Images/firstpage.jpeg" alt="" /> */}
                    </div>
                    

                    
                    <div className="col-12 col-lg-5">
                    <path d="M82.8 235.7v9.6c0 3.3-3.3 5.9-7.3 5.9H39.6c-4 0-7.3-2.7-7.3-5.9v-9.6m193 0v9.6c0 3.3-3.3 5.9-7.3 5.9h-35.8c-4 0-7.3-2.7-7.3-5.9v-9.6M34.4 91.7h-4c-2.4 0-4.4-2-4.4-4.4V72.1c0-2.4 2-4.4 4.4-4.4h4c2.4 0 4.4 2 4.4 4.4v15.2c0 2.5-1.9 4.4-4.4 4.4z"></path>
                    </div>
                    <div className="col-12 col-lg-6 partLIQ partLIQ2">
                        <span className="dgs dgLI2">VESTING OPTIONS</span>
                        <h2 className="h2 h3">TOKEN VESTING</h2>
                     
                        <h1>Vesting options can both be utilized by project owners and/or early adopters of a technology. We offer this option as an independant service, and it fits with the in-house ILO Platform. Wallets vesting tokens are reflected in a dedicated UI, allowing anyone to consult it in an easier way, and more.</h1>
              
                    </div>
                    

                    
                    <div className="col-12 col-lg-6 partLIQ partLIQ3">
                        <span className="dgs dgLI2">ENMT</span>
                        <h2 className="h2">TOKEN MINTING</h2>
                        <h1>Create your own token! The ENMT (ERC-20 Non Mintable Token) feature allows users to mint an ERC-20 compliant and non-mintable tokens (fixed supply).

                        <span className="lineHeight"> Coding skills are not required, and newly-minted token contracts do not require additional audits.</span></h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* <svg class="c6_c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.7 426.7" stroke-miterlimit="10" xmlns:v="https://vecta.io/nano"><path d="M415.4.4C399 6.5 385.6 18.8 378 34.6c-9.5 1.2-27.8 5.5-35.8 21.3-1.4 2.7-1.2 6 .5 8.5 19.5 34.1 22.3 75.3 7.7 111.8-.9 2.4-.6 5.1.7 7.4 2.1 3.6 26.2 31.8-7.9 52.3-1.9 1.1-5.5-.2-6.1 1.9-3.5 10.6-14.2 24.6-27.4 28.9-13.2 5.1-28.4 3.7-49.2-9.3-1.4-.9-2.9-1.3-4.6-1.3-.7 0-69.4.8-98.8 66.4-24-6.8-49.5 4.7-60.2 27.2-19.9-.3-81.1 4-96.7 66.5-.6 2.5-.1 5.2 1.6 7.3 1.6 2.1 4.1 3.3 6.7 3.3h401.1c9.4 0 17.1-7.6 17.1-17.1V8.5c0-2.7-1.3-5.3-3.5-6.9a9.04 9.04 0 0 0-7.8-1.2h0zm-5.8 409.2H20.2c19.8-48.6 78.6-43 81.2-42.7 3.8.4 7.4-1.8 8.8-5.3 3.3-9.5 10.5-17.1 19.8-21.1 9.2-4 19.7-3.9 28.9.2 2.1.9 4.5.8 6.6-.1s3.7-2.7 4.5-4.8c12.9-35.7 45.7-60.3 83.6-62.7 24.7 14.9 46.3 18.9 64.2 12 14.1-6.1 25.2-17.7 30.5-32.1 27.8-18.2 32.1-47.5 19.3-74.5 14.2-38.9 11.3-81.9-7.8-118.6 6.8-5.6 15.2-8.7 24-8.8 3.7 0 6.9-2.4 8.1-5.8 3.3-9.2 9.4-17.2 17.5-22.6v386.9zM273.1 307.2c-4.7 0-8.5 3.8-8.5 8.5v8.5c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-8.5c0-4.7-3.8-8.5-8.5-8.5zm-142.6 62.2L122 378c-3.2 3.3-3.2 8.7.1 12s8.6 3.3 12 .1l8.5-8.5c3.2-3.3 3.2-8.7-.1-12-3.3-3.4-8.7-3.4-12-.2zm251-93.8c-3.3-3.2-8.7-3.2-12 .1s-3.3 8.6-.1 12c9 9.1 10.1 11 14.6 11 3.5 0 6.6-2.1 7.9-5.3s.6-6.9-1.8-9.3l-8.6-8.5z"></path><path class="c6_d" d="M373.9 371.3c11.9-20.3 5.1-46.5-15.2-58.4s-46.5-5.1-58.5 15.2-5.1 46.5 15.2 58.5c16.1 9.4 35.8 7.1 49.3-4.4h0c3.6-3.1 6.7-6.7 9.2-10.9zm-5.9 2.4c.4-1.7.8-3.4.9-5.3 0-.7.1-1.3.1-2 0-3.5.9-13.3-6-23.4h0l-5.4 1.7h0l4.2-3.6h0s-5.8-7.7-8.6-8.3h0l-3.4 3.9h0l1.6-5.1h0s-4.8-4-11.2-5.5h0l-.3 5.7c-.3-.3-2.6-2.6-7.8 1.2h0l-17.3-15.6.5.9 11.4 17.3h0l-18.6 9.1s-6 4.3 2 9.7c0 0 4.6 2.3 19.7 4.3 0 0 1.7.3 3.8.1-2.2.3-4-.2-4-.2s3.7 8.3-6.6 15.6c-5.8 4.1-12 1.9-16.4-.7-9.9-12.2-11.7-29.7-3.3-44 10.9-18.7 35-25 53.7-14s25 35 14 53.7c-1 1.8-1.9 3.2-3 4.5zm-33.4-28.4l-7.1.8s-.4-2.7 2.4-3.1c.1 0 2.9-.3 4.7 2.3zm-88.2 2.2c-6-14.4-22.6-21.4-37-15.4S188 354.7 194 369.2s22.6 21.4 37.1 15.4c11.4-4.7 18.1-16.1 17.4-27.8h0c-.2-3.2-.8-6.3-2.1-9.3zm-1.1 4.1c-.7-.9-1.5-1.8-2.4-2.6-.3-.3-.7-.6-1-.9-1.8-1.4-6.7-5.8-14.8-6.2h0l-1.2 3.6h0l-.2-3.7h0s-6.4 0-7.8 1.2h0l.7 3.4h0l-2.1-2.9h0s-4 .9-7.4 3.7h0l2.9 2.5c-.2 0-2.4.4-2.5 4.6h0l-15.2 2.9.7.1 13.8.9h0s-2.7 12.8-2.6 13.5c0 0-.1 4.9 5.9 2.9 0 0 3-1.5 10.2-8.7 0 0 .9-.8 1.6-2-.7 1.3-1.7 2-1.7 2s5.9 1.4 5.6 9.7c-.2 4.7-3.8 7.2-7 8.4-10.4.4-20.4-5.7-24.6-15.9-5.5-13.3.8-28.5 14.1-34s28.5.8 34 14.1c.4 1.2.8 2.3 1 3.4zm-28.4 6.3l-2.4 4s-1.6-.9-.7-2.5c0 0 1-1.6 3.1-1.5zm114.4-109.5c11.9-20.3 5.1-46.5-15.2-58.4s-46.5-5.1-58.5 15.2c-11.9 20.3-5.1 46.5 15.2 58.5 16.1 9.4 35.8 7.1 49.3-4.4h0c3.6-3.1 6.7-6.7 9.2-10.9zm-6 2.4c.4-1.7.8-3.4.9-5.3 0-.7.1-1.3.1-2 0-3.5.9-13.3-6-23.4h0l-5.4 1.7h0l4.2-3.6h0s-5.8-7.7-8.6-8.3h0l-3.4 3.9h0l1.6-5.1h0s-4.8-4-11.2-5.5h0l-.3 5.7c-.3-.3-2.6-2.6-7.8 1.2h0l-17.3-15.6.5.9 11.4 17.3h0l-18.6 9.1s-6 4.3 2 9.7c0 0 4.6 2.3 19.7 4.3 0 0 1.7.3 3.8.1-2.2.3-4-.2-4-.2s3.7 8.3-6.6 15.6c-5.8 4.1-12 1.9-16.4-.7-9.9-12.2-11.7-29.7-3.3-44 10.9-18.7 35-25 53.7-14s25 35 14 53.7c-.9 1.8-1.9 3.2-3 4.5zM292 222.3l-7.1.8s-.4-2.7 2.4-3.1c0 .1 2.8-.2 4.7 2.3z" stroke-linejoin="round"></path></svg> */}
                         <img src="Images/firstpage.jpeg" alt="" />
                    </div>


                    <div className="col-12 col-lg-5">
                         <img src="Images/firstpage.jpeg" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 partLIQ partLIQ4">
                        <span className="dgs dgLI2">ILO PLATFORM</span>
                        <h2 className="h2Dece h3">DECENTRALIZED LAUNCHPAD FOR NEW PROJECTS</h2>
                        <p>As a token developer, our technology can serve you to launch your project. We are collaborating with an ever-increasing number of third-party providers that can review different aspects of your product.</p>
                           <p> As an incubator, you can also use our technology to launch your very own incubated projects.</p>
                           <p> as an investor, feel free to browse the latest projects, read carefully the reports from external providers, and most importantly never forget your own due diligence prior to any form of participation. We highly recommend reading fully our T&Cs.</p>
                    </div>


                    <div className="col-12 col-lg-6 partLIQ partLIQ5">
                        <span className="dgs">LIQUIDITY</span>
                        <h2 className="h2">LIQUIDITY LOCKERS</h2>
                       <p> Stimulating liquidity and creating market depth is essential for any cryptocurrency/token</p>

                       <p> This service allows project developers to incentivize their communities by creating a farming vault meant to be rewarding the liquidity providers.</p>

                        <p>Users/investors can then browse our platform and provide liquidity on the pairs/projects they may be interested about.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                         <img src="Images/firstpage.jpeg" alt="" />
                    </div>

                      
                    <div className="col-12 col-lg-5">
                         {/* <img src="Images/firstpage.jpeg" alt="" /> */}
                         <path fill="#040609" d="M95 92H5.5c-3 0-5.4-2.4-5.4-5.4V5.5C.1 2.5 2.5.1 5.5.1H95c3 0 5.4 2.4 5.4 5.4v81.2c0 2.9-2.4 5.3-5.4 5.3z"></path>
                         {/* <path fill="#040609" d="M95 92H5.5c-3 0-5.4-2.4-5.4-5.4V5.5C.1 2.5 2.5.1 5.5.1H95c3 0 5.4 2.4 5.4 5.4v81.2c0 2.9-2.4 5.3-5.4 5.3z"></path> */}
                    </div>
                    <div className="col-12 col-lg-6 partLIQ partLIQ6">
                        <span className="dgs">STAKING</span>
                        <h2 className="h3">STAKING AS A SERVICE</h2>
                        <h1>Vesting options can both be utilized by project owners and/or early adopters of a technology. We offer this option as an independant service, and it fits with the in-house ILO Platform. Wallets vesting tokens are reflected in a dedicated UI, allowing anyone to consult it in an easier way, and more.</h1>
              
                    </div>
                </div>
                {/* ...............component6......... */}
               

                
                            <div className="topMargin">
                                <div>
                                    <strong className="sub">2020</strong>
                                </div>
                                <div className="block_padding">
                                    <span className="dgs padd" >started in june</span>
                                </div>
                            </div>
 {/* ........fournumber...... icone */}

                            <div className="fourFlexdl col-12 row container">
                                <div className="col-12 col-lg-3" >
                                    <p className='dgs'>trusted by</p>
                                    <strong>14,000<span style={{ fontWeight:'bold'}}>+</span></strong>
                                    <small>project</small>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <p className='dgs'>locked</p>
                                    <strong>$500M<span style={{ fontWeight:'bold'}}>+</span></strong>
                                    <small>total value locked</small>
                                </div>
                                <div className="col-12 col-lg-3" >
                                    <p className='dgs'>services</p>
                                    <strong>6<span style={{ fontWeight:'bold'}}>+</span></strong>
                                    <small>unique services</small>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <p className='dgs'>users</p>
                                    <strong>1.2M<span style={{ fontWeight:'bold'}}>+</span></strong>
                                    <small>monthly users</small>
                                </div>
                            </div>

                            </center>
{/* ...................................................glass................. */}
                <center>
                    <div className="col-12 row glassPageBack">
                        <div className="uncx col-12 col-lg-6">
                            <div>
                                <img className="uncximg" src="Images/uncx.png" alt="" />
                                <div>
                                    <img className="uncdimg" src="Images/s-g.png" alt="" />
                                </div>
                                <h2 className="dg uncxh2">UNCX</h2>
                                <p>Launchpads allocation</p>
                                <p> Staking, profit-sharing ($USDC) & UNCL emission</p>
                                <p>Account management</p>
                                <p> Governance</p>
                            </div>
                            <button className="bt btg" style={{marginTop:100}} >unck infos</button>
                        </div>

                        <div className="uncx col-12 col-lg-6">
                            <div>
                                <img className="uncximg" src="Images/uncl.png" alt="" />
                                <div>
                                    <img className="uncdimg" src="Images/s-b.png" alt="" />
                                </div>
                                <h2 className="dg dgh2 uncxh2">UNCX</h2>
                                <p> Launchpads tickets reservation</p>
                                <p> Booster on farming/staking APYs</p>
                                <p> Account management</p>
                                <p> Reward token for UNCX stakers</p>
                                <p><strong className="uncdimg">Upcoming</strong> : StreAMM discounted trading</p>
                            </div>
                            <button className="bt btcolorBackground" style={{marginTop:100}} >unck infos</button>

                        </div>
                    </div>
                </center>  

               {/* ?????????????>>>>>>>>>>>>...............network LOGO       */}
                    <div className="containNetwork col-12 row">
                        <div className="border_radies col-12 col-lg-5">
                            <img src="Images/logo.svg" alt="" />
                            <h1></h1>
                        </div>
                        <div className="col-12 col-lg-7">
                            <h2>Thank you for taking the time to read these thoughts from the Unicrypt team. We sincerely hope that whoever you are and/or represent, that you will enjoy the services and utilities provided by the Unicrypt ecosystem.</h2>
                            <p>Unicrypt is driven by <strong>passion.</strong> The very same passion which animates its core members and community. Built from the ground up in June 2020 (no fundraising, ICOs, etc. Genesis here!), the green Unicorn found its inspiration from the geniuses that invented the <strong>Uniswap</strong> protocol - if you ever read this Hayden, you guys are the best.</p>
                            <p>It's worth mentioning that our<strong> community</strong> permanently tries to be<strong> constructive</strong>, and that definitely makes us different. Our community continues to lay the foundations on which the ethos, and the utility, of Unicrypt is built.</p>
                            <p>Criticism is necessary, no matter if it's good or bad, so long as we can learn something from the hundreds of conversations we handle on a daily basis. That being said, focusing on our communities allows the green unicorn (us!) to position itself as a<strong> reference</strong> from a <strong>product-market</strong> fit standpoint.</p>
                            <p>Our roadmap is simple: <strong>Automated, Decentralized, Scalable multi-chain</strong> technology.</p>
                            <p>Everyone is welcome.</p>
                            <p>Together, we are stronger.</p>
                            <p>Keep it up, Unicrypt family!</p>
                            <h6 className="dg">Unicrypt Team</h6>
                        </div>
                        
                    </div>  

             {/* <center> */}
                    {/* <div className=" footer_backGround row col-12">
                        
                        
                        <div className="cardBackGround1 col-12 col-lg-3">
                                <p>ss</p>
                               <p>Find the latest news and announcements <br/>from our main Unicrypt Team account</p>
                        </div> */}
                         {/* <div className="cardBackGround1 col-12 col-lg-3">
                            
                            <p>$$$</p>
                            <p>Actively engage and participate with the<br/> communityin our different channals</p>

                        </div>  
                        <div className="cardBackGround1 col-12 col-lg-3">
                                <p>$$</p>
                               <p>Read our documentation and learn how<br/> to use our services.</p>

                        </div>
                        <div className="cardBackGround1 col-12 col-lg-3">
                               <p>Dedicated articles related to our in-<br/>house technology</p>
                                <p>$$</p>
                        </div>   */}

                    {/* </div>     */}
                {/* </center> */}

{/* /....................? */}


    {/* <div className="footerBackGround"> */}
    <center>
        <div class="container main-footer">
            <div className="footer-box footerHovergreen">
                <div className="box-text ">
                    <h5 class="card-title">❤</h5>
                    <p>Find the latest news and announcements from our main Unicrypt Team account</p>
                </div>
            </div>
            <div  className="footer-box footerHover">
                <div className="box-text">
                    <h5 class="card-title">❤</h5>
                    <p>Actively engage and participate with the communityin our different channals</p>
                </div>
            </div>    
            <div className="footer-box footerHoverneviblue">
                <div className="box-text">
                    <h5 class="card-title">❤</h5>
                    <p>Read our documentation and learn how to use our services.</p>
                </div>
            </div>   
            <div className="footer-box footerHovernevcolor">
                <div className="box-text">
                        <h5 class="card-title">❤</h5>
                        <p>Dedicated articles related to our in-house technology</p>
                </div>
            </div>    
        </div>
        </center> 
    {/* </div> */}

            </>
        );
    }
}
 
export default MultiChain;