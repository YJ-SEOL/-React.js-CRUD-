import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

// 생성자를 정의하고 초기 상태 설정을 this하고 다른 이벤트에 바인딩함.
// 2개의 필드가 있으므로 입력 값을 추적하고 상태를 변경하도록 설정하는
// 2개의 함수를 만듬.
// 또한 양식(상태)의 값을 가져오고 웹 API에 POST 요청을 보내는 기능도 있음.
// TutorialDataService.create() 메서드 호출
export default class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            published: false,

            submitted: false,
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    saveTutorial() {
        var data = {
            title: this.state.title,
            description: this.state.description,
        };

        TutorialDataService.create(data)
            .then((response) => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    published: response.data.published,

                    submitted: true,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            id: null,
            title: "",
            description: "",
            published: false,

            submitted: false,
        });
    }
    // render() 메소드의 경우 상태를 확인하고 참(submitted)이면,
    // 새 Tutorial을 다시 생성하기 위한 추가 버튼을 표시
    // 거짓일 경우 양식이 표시됨.
    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button
                            className="btn btn-success"
                            onClick={this.newTutorial}
                        >
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button
                            onClick={this.saveTutorial}
                            className="btn btn-success"
                        >
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
