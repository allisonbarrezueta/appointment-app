import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderTitle from "@/components/ui/header-title";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Forms = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeaderTitle title="Forms" />
            <div className="flex items-center justify-end gap-4">
                {/* <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                </Button> */}
                <Button size="sm" className="h-8 gap-1" onClick={() => navigate("new")}>
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Form</span>
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Form Name 1</CardTitle>
                        <CardDescription>Used to identify your form in the marketplace.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <span>Small description</span>
                            <span>Created at</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default Forms;
