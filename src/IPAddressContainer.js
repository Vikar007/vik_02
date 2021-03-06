import React, { Component } from "react";
import IPAddress from "./IPAddress";
/*
class IPAddressContainer extends Component {
    render() {
        return (
            <p>Вот и все</p>
        );
    }
}

export default IPAddressContainer;
*/
var xhr;
class IPAddressContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_address: "…"
        };
        this.processRequest = this.processRequest.bind(this);
    }
    componentDidMount() {
        xhr = new XMLHttpRequest();
        //xhr.open("GET", "https://2ip.ru/json", true);
        xhr.open("GET", "http://api.ipify.org/", true);
        xhr.send();
        xhr.addEventListener("readystatechange",
            this.processRequest, false);
    }
    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //var response = JSON.parse(xhr.responseText);
            var response = xhr.responseText;
            this.setState({
                //ip_address: response.ip
                ip_address: response
            });
        }
    }
    render() {
        return (<
            IPAddress ip={this.state.ip_address}
        />
        );
    }
};
export default IPAddressContainer;