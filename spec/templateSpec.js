describe("TemplateEngine", function () {
  beforeEach(function () {
    m = {"day": "Thursday", "name": "Jessica"};
    t = "${name} has an appointment on ${day}";
  });

  describe("fillIn", function() {
    it("fills in the template with the appropriate values set in the map", function () {
      var result = TemplateEngine(t, m);
      expect(result).toEqual("Jessica has an appointment on Thursday")
    })
  })
});