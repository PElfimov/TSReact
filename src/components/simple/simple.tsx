import { Component } from "react";
import styles from "./simple.module.css";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";

interface Props {}

@observer
export class Simple extends Component<Props, {}> {
  render() {
    return <h1>Hello</h1>;
  }
}
