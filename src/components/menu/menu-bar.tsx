import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

const MenuBar = (props: { side: "left" | null | undefined; }) => {
    return (
        <SheetContent side={ props?.side }>
            <SheetHeader>
                <SheetTitle>Rental House Menu</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you are done.
                </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Username
                    </Label>
                </div>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    );
}

export default MenuBar;