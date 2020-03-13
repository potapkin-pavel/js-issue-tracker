const contentNode = document.getElementById('contents');

const issues = [
  {
    id: 1,
    status: 'New',
    owner: 'Ravan',
    effort: 5,
    created: new Date('2018-08-15'),
    due: undefined,
    title: 'Error in console when clicking Add'
  },
  {
    id: 2,
    status: 'Assigned',
    owner: 'Eddie',
    effort: 14,
    created: new Date('2018-08-16'),
    due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
  },
  {
    id: 3,
    status: 'New',
    owner: 'Bernie',
    effort: 18,
    created: new Date('2018-08-17'),
    due: undefined,
    title: '404 error on about page',
  },
  {
    id: 4,
    status: 'Assigned',
    owner: 'Ravan',
    effort: 4,
    created: new Date('2018-08-14'),
    due: undefined,
    title: 'Missed phone number in contacts',
  }
];

class IssueFilter extends React.Component {
  render() {
    return(
      <div>This is a placeholder for Issue Filter.</div>
    )
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return(
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : 'not specified'}</td>
        <td>{issue.title}</td>
      </tr>
    )
  }
}

class IssueTable extends React.Component {
  render() {
    const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
    return ( 
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    )
  }
}

class IssueAdd extends React.Component {
  render() {
    return(
      <div>This is a placeholder for Issue Add entry form.</div>
    )
  }
}

class IssueList extends React.Component {
  render() {
    return(
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </div>
    )
  }
}

const element = <IssueList />;

ReactDOM.render(element, contentNode);