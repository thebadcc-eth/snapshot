<script src="https://cdn.jsdelivr.net/npm/@snapshot-labs/snapshot.js"></script>

const sampleSpace = {...};
const valid = snapshot.utils.validateSchema(snapshot.schemas.space, sampleSpace);
console.log(valid);
