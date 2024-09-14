import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import HeaderTitle from "@/components/ui/header-title";
import { Input } from "@/components/ui/input";

const Settings = () => {
    return (
        <>
            <HeaderTitle title="Settings" />
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]">
                <nav className="grid gap-4 text-left text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
                    <a href="#" className="font-semibold text-primary">
                        General
                    </a>
                    <a href="#">Specialist</a>
                    <a href="#">Support</a>
                    <a href="#">Security</a>
                    <a href="#">Organizations</a>
                    <a href="#">Advanced</a>
                </nav>
                <div className="grid gap-6">
                    <Card x-chunk="dashboard-04-chunk-1">
                        <CardHeader>
                            <CardTitle>Store Name</CardTitle>
                            <CardDescription>Used to identify your store in the marketplace.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <Input placeholder="Store Name" />
                            </form>
                        </CardContent>
                        <CardFooter className="border-t px-6 py-4">
                            <Button>Save</Button>
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-04-chunk-2">
                        <CardHeader>
                            <CardTitle>Plugins Directory</CardTitle>
                            <CardDescription>The directory within your project, in which your plugins are located.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="flex flex-col gap-4">
                                <Input placeholder="Project Name" defaultValue="/content/plugins" />
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="include" defaultChecked />
                                    <label htmlFor="include" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Allow administrators to change the directory.
                                    </label>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="border-t px-6 py-4">
                            <Button>Save</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Settings;
