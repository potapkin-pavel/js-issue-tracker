const contentNode = document.getElementById('contents');
const issues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}, {
  id: 3,
  status: 'New',
  owner: 'Bernie',
  effort: 18,
  created: new Date('2018-08-17'),
  due: undefined,
  title: '404 error on about page'
}, {
  id: 4,
  status: 'Assigned',
  owner: 'Ravan',
  effort: 4,
  created: new Date('2018-08-14'),
  due: undefined,
  title: 'Missed phone number in contacts'
}];

class IssueFilter extends React.Component {
  render() {
    return React.createElement("div", null, "This is a placeholder for Issue Filter.");
  }

}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return React.createElement("tr", null, React.createElement("td", null, issue.id), React.createElement("td", null, issue.status), React.createElement("td", null, issue.owner), React.createElement("td", null, issue.created.toDateString()), React.createElement("td", null, issue.effort), React.createElement("td", null, issue.due ? issue.due.toDateString() : 'not specified'), React.createElement("td", null, issue.title));
  }

}

class IssueTable extends React.Component {
  render() {
    const issueRows = issues.map(issue => React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    }));
    return React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Id"), React.createElement("th", null, "Status"), React.createElement("th", null, "Owner"), React.createElement("th", null, "Created"), React.createElement("th", null, "Effort"), React.createElement("th", null, "Due Date"), React.createElement("th", null, "Title"))), React.createElement("tbody", null, issueRows));
  }

}

class IssueAdd extends React.Component {
  render() {
    return React.createElement("div", null, "This is a placeholder for Issue Add entry form.");
  }

}

class IssueList extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Issue Tracker"), React.createElement(IssueFilter, null), React.createElement("hr", null), React.createElement(IssueTable, null), React.createElement("hr", null), React.createElement(IssueAdd, null));
  }

}

const element = React.createElement(IssueList, null);
ReactDOM.render(element, contentNode);