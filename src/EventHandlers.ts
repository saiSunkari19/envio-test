/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ClutchGeneralCollectionContract,
  ClutchGeneralCollection_ApprovalEntity,
  ClutchGeneralCollection_ApprovalForAllEntity,
  ClutchGeneralCollection_BatchMetadataUpdateEntity,
  ClutchGeneralCollection_InitializedEntity,
  ClutchGeneralCollection_MetadataUpdateEntity,
  ClutchGeneralCollection_OwnershipTransferredEntity,
  ClutchGeneralCollection_PausedEntity,
  ClutchGeneralCollection_TransferEntity,
  ClutchGeneralCollection_UnpausedEntity,
  MarketplaceContract,
  Marketplace_InitializedEntity,
  Marketplace_ListedEntity,
  Marketplace_ListingPriceUpdatedEntity,
  Marketplace_NFTDelistedEntity,
  Marketplace_OwnershipTransferredEntity,
  Marketplace_PlatformFeeUpdatedEntity,
  Marketplace_PurchasedEntity,
} from "generated";

ClutchGeneralCollectionContract.Approval.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_ApprovalEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.ClutchGeneralCollection_Approval.set(entity);
});

ClutchGeneralCollectionContract.ApprovalForAll.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_ApprovalForAllEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.ClutchGeneralCollection_ApprovalForAll.set(entity);
});

ClutchGeneralCollectionContract.BatchMetadataUpdate.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_BatchMetadataUpdateEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _fromTokenId: event.params._fromTokenId,
    _toTokenId: event.params._toTokenId,
  };

  context.ClutchGeneralCollection_BatchMetadataUpdate.set(entity);
});

ClutchGeneralCollectionContract.Initialized.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_InitializedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    version: event.params.version,
  };

  context.ClutchGeneralCollection_Initialized.set(entity);
});

ClutchGeneralCollectionContract.MetadataUpdate.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_MetadataUpdateEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    _tokenId: event.params._tokenId,
  };

  context.ClutchGeneralCollection_MetadataUpdate.set(entity);
});

ClutchGeneralCollectionContract.OwnershipTransferred.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_OwnershipTransferredEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.ClutchGeneralCollection_OwnershipTransferred.set(entity);
});

ClutchGeneralCollectionContract.Paused.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_PausedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    account: event.params.account,
  };

  context.ClutchGeneralCollection_Paused.set(entity);
});

ClutchGeneralCollectionContract.Transfer.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_TransferEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.ClutchGeneralCollection_Transfer.set(entity);
});

ClutchGeneralCollectionContract.Unpaused.handler(({ event, context }) => {
  const entity: ClutchGeneralCollection_UnpausedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    account: event.params.account,
  };

  context.ClutchGeneralCollection_Unpaused.set(entity);
});

MarketplaceContract.Initialized.handler(({ event, context }) => {
  const entity: Marketplace_InitializedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Marketplace_Initialized.set(entity);
});

MarketplaceContract.Listed.handler(({ event, context }) => {
  const entity: Marketplace_ListedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    listingId: event.params.listingId,
    seller: event.params.seller,
    nftContract: event.params.nftContract,
    tokenId: event.params.tokenId,
    price: event.params.price,
    paymentToken: event.params.paymentToken,
  };

  context.Marketplace_Listed.set(entity);
});

MarketplaceContract.ListingPriceUpdated.handler(({ event, context }) => {
  const entity: Marketplace_ListingPriceUpdatedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    listingId: event.params.listingId,
    newPrice: event.params.newPrice,
  };

  context.Marketplace_ListingPriceUpdated.set(entity);
});

MarketplaceContract.NFTDelisted.handler(({ event, context }) => {
  const entity: Marketplace_NFTDelistedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    listingId: event.params.listingId,
  };

  context.Marketplace_NFTDelisted.set(entity);
});

MarketplaceContract.OwnershipTransferred.handler(({ event, context }) => {
  const entity: Marketplace_OwnershipTransferredEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Marketplace_OwnershipTransferred.set(entity);
});

MarketplaceContract.PlatformFeeUpdated.handler(({ event, context }) => {
  const entity: Marketplace_PlatformFeeUpdatedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    newPlatformFee: event.params.newPlatformFee,
  };

  context.Marketplace_PlatformFeeUpdated.set(entity);
});

MarketplaceContract.Purchased.handler(({ event, context }) => {
  const entity: Marketplace_PurchasedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    listingId: event.params.listingId,
    buyer: event.params.buyer,
    nftContract: event.params.nftContract,
    tokenId: event.params.tokenId,
    price: event.params.price,
    paymentToken: event.params.paymentToken,
  };

  context.Marketplace_Purchased.set(entity);
});
