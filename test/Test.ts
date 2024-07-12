import assert from "assert";
import { 
  TestHelpers,
  ClutchGeneralCollection_ApprovalEntity
} from "generated";
const { MockDb, ClutchGeneralCollection } = TestHelpers;

describe("ClutchGeneralCollection contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ClutchGeneralCollection contract Approval event
  const event = ClutchGeneralCollection.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  // Processing the event
  const mockDbUpdated = ClutchGeneralCollection.Approval.processEvent({
    event,
    mockDb,
  });

  it("ClutchGeneralCollection_ApprovalEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualClutchGeneralCollectionApprovalEntity = mockDbUpdated.entities.ClutchGeneralCollection_Approval.get(
      `${event.transactionHash}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedClutchGeneralCollectionApprovalEntity: ClutchGeneralCollection_ApprovalEntity = {
      id: `${event.transactionHash}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualClutchGeneralCollectionApprovalEntity, expectedClutchGeneralCollectionApprovalEntity, "Actual ClutchGeneralCollectionApprovalEntity should be the same as the expectedClutchGeneralCollectionApprovalEntity");
  });
});
