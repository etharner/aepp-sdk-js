<template>
  <div class="w-full p-4 flex flex-col">
    {{ signedTx ? `Transaction signed ${signedTx}` : 'No signed transactions' }}
    <router-link :to="{ name: 'home' }">Back</router-link>
  </div>
</template>

<script>
  //  is a webpack alias present in webpack.config.js
  import { Aepp } from 'AE_SDK_MODULES'
  import Ae from 'AE_SDK_MODULES/ae/universal';
  import * as Crypto from 'AE_SDK_MODULES/utils/crypto'

  export default {
    data: () => ({
      signedTx: '',
    }),
    async created () {
      const rlpToStrings = (o) => Object.values(o).map(v => typeof v === "Array" ? rlpToStrings(v) : v.toString());
      const rlp = rlpToStrings(Crypto.decode(Crypto.decodeBase58Check(this.$route.query.d)));
      console.log(rlp);
      if (rlp[1] !== 'denied') {
        localStorage.setItem('signedTx', rlp[1])
        this.signedTx = rlp[1];
      };
    }
  }
</script>
