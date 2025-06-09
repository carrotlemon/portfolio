

export default function About() {

    return (<>
        <div className="flex-col justify-center pt-40">
            <div className="flex justify-center h-50">
                <div className="flex-col justify-center">   
                    <div className="pl-30 text-4xl">
                        Contact
                    </div>
                    <div className="pl-30 text-md w-108">
                        If you would like to work with me, please don't hesitate! 
                    </div>
                </div>
                
                {/* angled image that points towards cursor and has grey transparent shadow behind it and rounded corners*/}
                <div className="mx-30 px-30 bg-blue-200">
                    <div>
                        (bigger) Email - trevorkim3141@gmail
                    </div>
                    <div>
                        (bigger) Github - carrotLemon
                    </div>
                    <div>
                        (bigger) LinkedIn - 
                    </div>
                    <div>
                        (icon only) Discord
                    </div>

                </div>
            </div>
        </div>
    </>);
};