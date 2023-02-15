import Model from "./Model";

export default class Search extends Model {
  static ENDPOINT = "search";

  constructor(productSupplier) {
    super();
    this.id = productSupplier.id;
  }

  //   error		❌

  //   <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  //   <errors>
  //     <error>
  //       <code><![CDATA[100]]></code>
  //       <message><![CDATA[You have to set both the 'language' and 'query' parameters to get a result]]></message>
  //     </error>
  //   </errors>
  // </prestashop>

  // add non static CRUD
}
