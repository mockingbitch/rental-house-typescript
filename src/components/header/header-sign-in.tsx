import {useEffect, useState} from "react";
import {
    logoIcon, hamburgerIcon, githubIcon, twitterIcon
} from "@/assets/images/icon";
import {
    Sheet,
    SheetTrigger,
} from '@/components/ui/sheet';
import {Button} from "@/components/ui/button";
import MenuBar from "@/components/menu/menu-bar";
import clsx from "clsx";
import { MOBILE_WIDTH, SHEET_SIDES } from "@/lib/constants.ts";
// import {ModeToggle} from "@/components/button/night-mode-button";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <>
            <header
                className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <a className="mr-6 flex items-center space-x-2" href="/">
                            <img src={ logoIcon } width={20} height={20} alt='Logo'/>
                            <span className="hidden font-bold sm:inline-block">Rentalhouse</span>
                        </a>
                        <nav className="flex items-center gap-4 text-sm lg:gap-6">
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/docs"
                            >Docs</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href="/docs/components"
                            >Components</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/themes"
                            >Themes</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/examples"
                            >Examples</a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/blocks"
                            >Blocks</a>
                            <a
                                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                                href="https://github.com/shadcn-ui/ui"
                            >GitHub</a>
                        </nav>
                    </div>
                    <Sheet key={SHEET_SIDES}>
                        <SheetTrigger asChild>
                            <Button className={clsx('outline-0', width >= MOBILE_WIDTH ? 'hidden' : '')} variant="outline">
                                <img src={ hamburgerIcon } width={20} height={20} alt='Hamburger menu'/>
                            </Button>
                        </SheetTrigger>
                        <MenuBar side={ SHEET_SIDES } />
                    </Sheet>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <Button
                                className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                                <span className="hidden lg:inline-flex">Search documentation...</span><span
                                className="inline-flex lg:hidden">Search...</span><kbd
                                className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span
                                className="text-xs">⌘</span>K</kbd>
                            </Button>
                        </div>
                        <nav className="flex items-center">
                            <a target="_blank" rel="noreferrer" href="https://github.com/shadcn-ui/ui">
                                <div
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                    <img src={ githubIcon } width={20} height={20} alt='Github'/>
                                    <span className="sr-only">GitHub</span></div>
                            </a><a target="_blank" rel="noreferrer" href="https://twitter.com/shadcn">
                            <div
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                <img src={ twitterIcon } width={20} height={20} alt='Twitter'/>
                                <span className="sr-only">Twitter</span></div>
                        </a>
                            {/*<Button*/}
                            {/*    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"*/}
                            {/*    type="button" id="radix-:Rtmu6la:" aria-haspopup="menu" aria-expanded="false"*/}
                            {/*    data-state="closed">*/}
                            {/*    <ModeToggle />*/}
                            {/*</Button>*/}
                        </nav>
                    </div>
                </div>
                <Sheet key="left" />
            </header>
        </>
    );
}

export default Header;