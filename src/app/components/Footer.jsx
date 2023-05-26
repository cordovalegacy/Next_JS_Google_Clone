// !this component is used in the root layout.jsx file
import Country from "./Country" //gets user ip data
import Link from "next/link" //a tag configured for SPA

const Footer = () => { //fixed to bottom of page
    return (
        <footer className="bg-slate-50 h-16 text-gray-700 text-sm w-full absolute bottom-0 left-0 tracking-wider">
            <div className="border-b-2 flex items-center w-full justify-center h-1/2">
                <Country/>
            </div>
            <div className="flex items-center justify-evenly h-1/2">
                <div className="flex-1 flex items-center justify-evenly">
                    <Link
                        className="hover:underline underline-offset-2 decoration-gray-700"
                        href={'https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'}>Advertising</Link>
                    <Link
                        className="hover:underline underline-offset-2 decoration-gray-700"
                        href={'https://smallbusiness.withgoogle.com/?subid=us-en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=us-en_US-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/'}>Business</Link>
                    <Link
                        className="hover:underline underline-offset-2 decoration-gray-700"
                        href={'https://www.google.com/search/howsearchworks/?fg=1'}>How Search Works</Link>
                </div>
                <div className="flex-1 flex items-center justify-evenly">
                    <h3>
                        Website -
                        <Link
                            className="text-blue-700 hover:underline underline-offset-2 decoration-gray-700"
                            href={'https://www.linkedin.com/in/brendan-cordova-2874011ba/'}> Brendan Cordova</Link>
                    </h3>
                </div>
                <div className="flex-1 flex items-center justify-evenly">
                    <Link
                        className="hover:underline underline-offset-2 decoration-gray-700"
                        href={'https://policies.google.com/privacy?hl=en&fg=1'}>Privacy</Link>
                    <Link
                        className="hover:underline underline-offset-2 decoration-gray-700"
                        href={'https://policies.google.com/terms?hl=en&fg=1'}>Terms</Link>
                    <Link
                        className="hover:underline underline-offset-2 decoration-gray-700"
                        href={'https://policies.google.com/terms?hl=en&fg=1'}>Settings</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer