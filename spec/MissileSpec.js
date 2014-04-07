describe('missile resolution script', function() {
  var salvo;

  beforeEach(function() {
    salvo = new SalvoData("Thor", 18, 8, 2, 2, 0, 4, 4, false, false);
  });


  describe("SalvoData", function(){
    it("should create a salvoData object", function(){
      expect(salvo.targetName).toEqual("Thor");
      expect(salvo.missileNumber).toEqual(18);
      expect(salvo.mql).toEqual(8);
      expect(salvo.ecm).toEqual(2);
      expect(salvo.decoy).toEqual(2);
      expect(salvo.wedge).toEqual(false);
      expect(salvo.fcon).toEqual(0);
      expect(salvo.cm).toEqual(4);
      expect(salvo.pd).toEqual(4);
      expect(salvo.nuke).toEqual(false);
    });
  });

  describe("calculate ecm kills", function(){
    it("correctly calulates ecm kills when wedge is not rolled", function(){
      expect(calculateEcmKills(salvo, 3).ecmKills).toEqual(7);
    });

    it("correctly calulates ecm kills when wedge is not rolled and decoy is deployed", function(){
      expect(calculateEcmKills(salvo, 3).ecmDecoyKills).toEqual(9);
    });

    it("correctly calulate ecm kills when wedge is rolled", function(){
      salvo.wedge = true;
      expect(calculateEcmKills(salvo, 3).ecmKills).toEqual(14);
    });
  });

  describe("calculate cm kills", function(){
    it("should skip resolution when wedge is rolled", function(){
      salvo.wedge = true;
      expect(calculateCmKills(salvo).cmKills).toEqual(0);
    });

    it('should calculate cm kills properly when wedge is not rolled', function(){
      expect(calculateCmKills(salvo, 3).cmKills).toEqual(3);
    });

    it('should calculate cm kills properly for large cm values when wedge is not rolled', function(){
      salvo.cm = 25
      expect(calculateCmKills(salvo, 3).cmKills).toEqual(21);
    });
  });

  describe("calculate pd kills", function(){
    it('should calculate pd kills properly when wedge is not rolled', function(){
      expect(calculatePdKills(salvo, 3).pdKills).toEqual(3);
    });

    it("should halve pd kills when wedge is rolled", function(){
      salvo.wedge = true;
      expect(calculatePdKills(salvo, 3).pdKills).toEqual(1);
    });

    it("should double kills when nukes are fired", function(){
      salvo.nuke = true;
      expect(calculatePdKills(salvo, 3).pdKills).toEqual(6);
    });

    it('should calculate pd kills properly for large pd values when wedge is not rolled', function(){
      salvo.pd = 25
      expect(calculatePdKills(salvo, 3).pdKills).toEqual(21);
    });
  });
});