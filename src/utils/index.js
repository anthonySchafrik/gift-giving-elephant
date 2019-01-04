export default (handleNewGroupOption = event => {
  let id = event.target.id;
  let value = event.target.value;
  this.props.newGroupInfo(id, value);
});
