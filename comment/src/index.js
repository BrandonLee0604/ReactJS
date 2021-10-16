import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                 Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00PM"
                content="I liket the subject!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                content="I like the writing!"
                avatar={faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));