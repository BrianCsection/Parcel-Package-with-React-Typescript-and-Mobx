import * as React from "react";
import "./main.scss";
import {observer} from "mobx-react";
import {computed, observable} from "mobx";

export interface MainProps {

}

@observer
export class Main extends React.Component<MainProps, {}> {

    @observable
    someVar: string = "";

    constructor(props: Readonly<MainProps>, context: any) {
        super(props, context);
    }

    @computed
    get calculateData() {
        return null;
    }

    render() {
        return (
            <div className="main">

            </div>
        );
    }
}