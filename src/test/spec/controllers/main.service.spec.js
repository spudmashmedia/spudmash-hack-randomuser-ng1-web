'use strict';
/*
xdescribe('Main Service', function() {
  var mainFactory, $httpBackend, data;

  // load the controller's module
  beforeEach(module('main'));

  beforeEach(inject(function(_mainFactory_, _$httpBackend_) {
    mainFactory = _mainFactory_;

    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('gets a profile', function() {

    $httpBackend
      .whenGet('https://localhost/api')
      .respond({
        "results": [{
          "user": {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "samuel",
              "last": "lee"
            },
            "location": {
              "street": "5378 west street",
              "city": "tipperary",
              "state": "alaska",
              "zip": 88602
            },
            "email": "samuel.lee@example.com",
            "username": "bigwolf664",
            "password": "forrest",
            "salt": "HIhXXSBx",
            "md5": "9219907336faf294abf1def4d32700e4",
            "sha1": "12228a6bb27a79b220c9f560cdc00cbadb6dea83",
            "sha256": "8c6c36854f13937d9c81528ee3bae232645ee56ddce7a06b109f13f272faf066",
            "registered": 1314228239,
            "dob": 737006749,
            "phone": "031-116-0896",
            "cell": "081-806-6380",
            "PPS": "6860240T",
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/34.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            }
          }
        }],
        "nationality": "IE",
        "seed": "86d96923b3b37c2a09",
        "version": "0.8",
        "ThisIsASingleton": "true"
      });

    expect(mainFactory).toBeDefined();
    expect(mainFactory.GetUser).toBeDefined();


    mainFactory
      .GetUser()
      .then(function(response) {
        data = response;
      });
    $httpBackend.flush();
    expect(data.ThisIsASingleton).toBe(true);

  });

});
*/
