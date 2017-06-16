function createWebFriendlySubset(execlib,TalkerFactory){
  'use strict';
  var lib = execlib.lib,
    streamlib = require('allex_streamclientcorelib')(lib),
    statelib = require('allex_stateclientcorelib')(lib),
    loadDependencies = require('allex_dependencyloaderclientcorelib')(execlib),
    talkerSpawner = require('allex_transportclientcorelib')(lib, TalkerFactory),
    clientFactory = require('allex_clientsclientcorelib')(lib, talkerSpawner),
    RegistryBase = require('allex_registrybaseclientcorelib')(execlib);

  execlib.loadDependencies = loadDependencies;
  execlib.execSuite = {
    RegistryBase: RegistryBase,
    additionalRegistries: new lib.Map(),
    streamSourceCreator: streamlib.streamSourceCreator,
    StreamSink: streamlib.StreamSink,
    StreamBlackHole: streamlib.StreamBlackHole,
    StreamSinkBunch: streamlib.StreamSinkBunch,
    StreamDistributor: streamlib.StreamDistributor,
    StateCoder: statelib.StateCoder,
    StateSource: statelib.StateSource,
    State2Array: statelib.State2Array,
    State2Defer: statelib.State2Defer,
    StateDecoder: statelib.StateDecoder,
    State2Map: statelib.State2Map,
    StatePathModifier: statelib.StatePathModifier,
    StatePathListener: statelib.StatePathListener,
    StateCollectionListener: statelib.StateCollectionListener,
    StateScalarListener: statelib.StateScalarListener,
    StateSubServiceExtractor: statelib.StateSubServiceExtractor,
    ADS: statelib.ADS,
    Collection: statelib.Collection,
    LimitedCollection: statelib.LimitedCollection,
    libRegistry: new RegistryBase(),
    talkerSpawner: talkerSpawner,
    clientFactory: clientFactory
  };
  execlib.execSuite.dependentMethod = require('allex_dependentmethodclientcorelib')(lib);
  require('allex_taskclientcorelib')(execlib); //augment execSuite with Task functionality
  require('allex_servicepackclientcorelib')(execlib,clientFactory); //augment execSuite with servicepack functionality (registry created here)
};

module.exports = createWebFriendlySubset;
