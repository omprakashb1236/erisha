const fs = require("fs");
["OurProcess.tsx", "OurImpact.tsx", "OurCommitment.tsx", "BetterProducts.tsx"].forEach(file => {
  let content = fs.readFileSync("app/components/" + file, "utf8");
  content = content.replace(/\? \/\\\\?\s*: linkObj\?\.linkType/g, "? `/${linkObj.page.slug}`\n    : linkObj?.linkType");
  fs.writeFileSync("app/components/" + file, content);
});
