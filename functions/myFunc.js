exports = function(changeEvent) {
  const movies = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");

  const documentId = changeEvent.documentKey._id;
  const magicField = { "magic_just_happened": true };

  movies.updateOne({_id: documentId}, {$set: magicField}).then(result => {
    console.log("Document updated successfully:", result);
  }).catch(error => {
    console.log("Error updating document:", error);
  });
};
