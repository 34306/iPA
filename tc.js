function findUrl(_reg) {
  if (_reg.test($request.url)) {
    return $request.url;
  }
}
const features = [
  { "id": "live_lookup", "rank": 1, "status": "Included", "isFree": false },
    { "id": "auto_spam_block", "rank": 2, "status": "Included", "isFree": false },
    { "id": "series_blocking", "rank": 3, "status": "Included", "isFree": false },
    { "id": "no_ads", "rank": 4, "status": "Included", "isFree": false },
    { "id": "extended_spam_blocking", "rank": 5, "status": "Included", "isFree": false },
    { "id": "advanced_caller_id", "rank": 6, "status": "Included", "isFree": false },
    { "id": "verified_badge", "rank": 7, "status": "Included", "isFree": false },
    { "id": "spam_stats", "rank": 8, "status": "Included", "isFree": false },
    { "id": "call_alert", "rank": 9, "status": "Included", "isFree": false },
    { "id": "premium_feature", "rank": 12, "status": "Included", "isFree": false },
    { "id": "identifai", "rank": 15, "status": "Included", "isFree": false },
    { "id": "siri_search", "rank": 16, "status": "Included", "isFree": false },
    { "id": "who_viewed_my_profile", "rank": 17, "status": "Included", "isFree": false },
    { "id": "who_searched_for_me", "rank": 18, "status": "Included", "isFree": false },
    { "id": "contact_request", "rank": 19, "status": "Included", "isFree": false },
    { "id": "incognito_mode", "rank": 20, "status": "Included", "isFree": false },
    { "id": "premium_badge", "rank": 21, "status": "Included", "isFree": false },
    { "id": "premium_app_icon", "rank": 22, "status": "Included", "isFree": false },
    { "id": "ghost_call", "rank": 23, "status": "Included", "isFree": false },
    { "id": "live_chat_support", "rank": 24, "status": "Included", "isFree": false },
    { "id": "call_recording", "rank": 25, "status": "Excluded", "isFree": false },
    { "id": "premium_support", "rank": 25, "status": "Included", "isFree": false },
    { "id": "family_sharing", "rank": 26, "status": "Excluded", "isFree": false },
    { "id": "gold_caller_id", "rank": 27, "status": "Included", "isFree": false },
    { "id": "announce_call", "rank": 28, "status": "Excluded", "isFree": false },
    { "id": "caller_id", "rank": 29, "status": "Included", "isFree": true },
    { "id": "spam_blocking", "rank": 30, "status": "Included", "isFree": true },
    { "id": "whatsapp_caller_id", "rank": 31, "status": "Excluded", "isFree": false }
];
var obj;
switch ($request.url) {
  case findUrl(/subscriptions\/status/):
      obj = {
        expire: "2099-01-01T01:01:01Z",
        start: "2024-01-07T02:32:04Z",
        paymentProvider: "Apple",
        isExpired: false,
        isGracePeriodExpired: false,
        subscriptionStatus: "SUBSCRIBED",
        inAppPurchaseAllowed: true,
        product: {
          id: "renewable.gold.annual",
          sku: "renewable.gold.annual",
          contentType: "subscription",
          productType: "GoldYearly",
          isFreeTrial: false
        },
        tier: { id: "gold", feature: features }
      }
    break;
  case findUrl(/products\/apple/):
      obj = {
  "tier": [
    {
      "id": "gold",
      "product": [
        {
          "productType": "GoldYearly",
          "id": "renewable.gold.annual",
          "sku": "renewable.gold.annual",
          "contentType": "subscription",
          "rank": 6,
          "paymentProvider": "Apple",
          "clientProductMetadata": {
            "selectionRank": 5,
            "displayOrder": 5,
            "isEntitledPremiumScreenProduct": false
          }
        }
      ],
      "feature": features,
      "rank": 5
    }
  ]
}
    break;
}
$done({body: JSON.stringify(obj)});