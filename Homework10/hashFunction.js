function hashFunction(string){
    let hash = 912;

    for(let i=0; i<string.length; i++){
        //multiply the hash by 31 in a fancy way and sum it with the charcode
        //then divide the resultant hash by 16
        hash = (hash<<5)-hash + string.charCodeAt(i);
        hash = hash>>4;
    }

    return Math.abs(hash);

}

function djb2Hash(str, tableSize) {
    let hash = 5381n;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5n) + hash) + BigInt(str.charCodeAt(i));
        hash = hash % BigInt(2 ** 53 - 1);
    }
    return Number(hash % BigInt(tableSize));
}

//Test case, 100 strings with a normal distributed length
let strings = [
    'NCeGt0EGKfP6_ZdHQIuUwAfdRbrBJ_IVzhKT5tQ',
    'lnK_sRI4VAIJCuQZ2gZlsn4LEmVq_7dQQCzESVcFISnKCyYwUoI1731',
    'kjMCX4c0gHVVAI290IS5Ci0YTSej_kJsD7bM11bn3bc_Pq8v',
    'pUMEzsyJuHlOLRfkYBgDtVMmoEQwiZ6sF3FQP59VTX5ze1Y9TaayG_EFHIsMgioCV',
    'dYqPXq8r6puHWEvCnfcr4ID0tFhX5aZMRlihNBWaJIXwy7vyzl',
    'Wz-5wP5btdpVfclHj3Y-KXEzgKhiYn649bmSKJdCrau4vscZJ5eE1Za0',
    'RZiEmr0gWewbIPSCVtSxZUC7D9OiLlmFAxjt4mdU_jZOrcmst',
    'HzTy0wJbrBrrCx-MOtcMwIGAvebw_iM-SpCfYdeSSXC0aGpip45smWDNoapJk5WLDDGx0k7vjE',
    'fTpMmvyRLXwTyzd74YJbywrr2v__hi_HHXujQR',
    'Dt8kfrfnibo8yIV1BiofKcG-JR',
    'SMlrnnjWhWk8I2tVNbEOab86DPIkZCI0eDuIeYGQMDJJpI2',
    'ycNL_qRKuICSjIXPwJq_GiRQq9Fq3f-m3o_XGdWLX1N',
    'rvVl19fRvo5I8OpjtuBoVGOwvFEjgNQRDdNFmJiX7sWefwwP',
    'MknuNlxQh1jjgINAt0fEJ_sGx3qChh6FOQUtJUJ3P1Rr9yJSHAmbb1aweOt966aBChkMC',
    'Kht-FFSOaORygh2D18PygBLZiyBuZYps1aPhHl',
    'Cs5cyLHGcakII615ZOTVNaV5wQIIo0O6mP8BxtjBz-HKE4',
    'WElxBRznFU2dw-bY71TAwvtKU7nHfC8CvIWoxj4b_7COJAr4h',
    'ETALgwU8c35DUGF0VwVXYglCJpuCIpHBMa0USUSemWK9I',
    'w7hJSGE59IHZGZTJjZE6szassyZl3KBPHFNmQ-6iO7VjQPnmQeWEilO',
    'ys1_Baz6Ku_6z-3Xku6EkldqvhbapM9hrSb_tOWrn',
    'PY_Z79hxgREB8OZ4rbdxKcL8JixYbU0qoGwTMgCFMVxBOX0n-rK0',
    'n1SIgm6MiC8d-s5MfS9g30Dr1sC9h65opVGaNLARLDG8tjWm',
    'nxWadebeFXrBHUOj9iBs_NSH-fU_XPN6lznnwftrAuV-ldAXPnXA0QZXGmam8h6KM',
    'hCTsfP2rRI7SBlKy_P2gS3-xUMY6dhHJHGiX8EeP0BPnbo9LW5zIA-LDar-',
    'DE18qgFiXE7swd1QgLlnrf6Z69fR0yMCwCAsyJVKHgUjwaqyGtltW',
    'uWdLLKkqsEqtphX1I4RJCBfxjBCon0zsnbfmdvGg9QNJm-',
    '6YZ08kV_n2IntClijciwVI7hWR951B-KbdGN4hzVKuZ4CPot8h',
    'WIk_PTW7SEGvAwPRngXxh-hiGOwLlmcuOgQaNnz0ZpENeuL',
    'In6D5XeFw8goEdWDvCGBZ9XAeXNnKP8cuELaa8xU6qc2N5f07A',
    'xzMo-iUp36ehEmrzH2BuIBNmuYP0DG0Ka',
    '09l34JuVBhxxpaREnX2BtOxU4HOh3aOCDPPo3VjMyyj-fqaGmL7q5KmrS',
    'j1p0JX7hnq3QbqIaI1WggbaP9YZ-2UaSbzEoV9nqoqfnOo1',
    'lYK2mga1tuqvP9ODTZeAAJiCKbyznfqu3YAPqTglrneMCBDKFL',
    '__F1cTDJsBwxqzw1NWubWWHwwqlOZ0gmjnfZkUt0shCdU34b5PyW',
    '33Fs1LYDaHD_JTnXu3C3v4_iEYlGHKGMHDVy3TL-24w770KzbDx5UwCl-kMLs6',
    'NrZiymmWeecFrTvKDOTs5c2l',
    'cOFh92ls9CLCC_VmDvxk75-W-PxKwtB0vx8e8S4RVHcjo3i3VSTf',
    'IeqXUzEQhrpo-3XTXvp9wkRB4Zw43rh2wvPofOe-fgrY8vOPJ0',
    'gdZVG_xStnVFA_X5O3TuQTnqnRoHt-8aimzVxZYXZEPty2O',
    'J11sAWOd-ios27peLUCVgWkqWNr-DIRrb4ZlyqO5jh_UO77',
    'QqGyLa569FEwbknt4hSrUyqx_TNiSSjD3QK-aOgEitCtaIxYgy3cvbXAkEE6lYOQ',
    'LKp0PBRYwanGksDUGatmoUYXv2p9gjSjkdcuabBo6Q6MYeK5MqB4uarmc',
    'AKNh1Gi3Jssvd3U6UwYgyNDkZmuBSIXAlAhdwo-tA9VPGh3nXdu',
    'A8J7scN888Kc5nzoE5xp8WXH-5M_FcKq4xpLNy64_ep',
    '4UQUf61kVS-c333RXvMwVDwTrrOD9hgvCemIREXsfMEraMjaiKUUN',
    'Cth2LGi8wq1_Vfb8Ma2lbFfUOi29YvY9',
    'GQSs_kKkJAGlW4qgJ44SIy3naIrV6gjN9',
    'W8-6NpXs-AacLaEjMonWdPYD-1GeBZGgC8zpNYAG5Jw8uSMMrq3GsSM',
    'd6QV6-OzDqVNjp3aIFBE15Dk7vvW1d10vcxgB7z-oKm_JK_',
    'N7h7RwOEjtjfYHH5cZf4EnafcsctjQfQUS6jmdsLkvJdgmHyQJgiNgZhGTzvua',
    'Jn3mvfxPfXvMwtahoYIGvCRuUa8JlMgVJaw7PWsmLyMjjvwxQUO',
    'POXwaf_pmfoKLk1k-GRa5nEIf3JrjJkR6wluZr-Td',
    'rg1mEy869w94yi4lJiiopfBEMfsnr_97FQf2r9Y_TgBT9',
    'sTeuL4jTtDciAwuKGrBUV2XNlAkW95aOvsOLk5OnSm-nH077C_gJRX04Tp_P3',
    'zrHY6VJAz47PeYaNs01d_qyC4iLs5VpZz05eyr2W',
    'v6sBhITlePBxiN4HzY5o6PzA7Rfsc5wG5BC1no6EvmvZU-wUt5s47ZEV8oQLPkdheP8',
    '2JBbhIu-3TxoAQe6VvD_1kDGugLw-YtIRRv8CpOvUqZsWAHH',
    'Aufb6Xtzxndbm-NEpbeiwhkjf8wATQpL9zKhnwb_FzifH',
    'qzAaPsE2KkxS6VGWcyY7y4WfVKRDV0YRdTdUEEYIgDd',
    'OB08GRehVA8KqnIufff1U6ZaNcRnStcCLprFrk9wfRRbRypyigKB4E0u_kJ7ADu',
    'VtoRsepJpIFnDUak5D1Qq9GiCE4phM9SBGcedJMwZaeBXsqsxozBN54dLQFlgx',
    'y-6EbeIp0RHhNNJxFD28oarlQpv1tBpKzpTiBceDbdcblhnsTFmy',
    'hwo7PXL0tokjdX_ogHjG_1ckjMDB0xZopQuSzkV8iEUdYl4ZZ6MoFJcWjQ89qGG7i3en',
    'Tyiy_uEvITcDl_9UYEDBIB-owuMmiRXeQTgWDTM_3OIJJkvOy1pv',
    'Cd_qIR_Z-Ggxwvw9uxdibCusKn5QCOsrDKVbXtOKNKRo0v',
    'SB8UFC6ocgL_f7nAWmkBRH-sS9qfeoRPLDxSYO3pjByQc3Jlww',
    'ClKXtQxivt6FN4CDr4SZ',
    '5MYLHJJMDZK-fMfmM1ExqGkcjvMN64RMNdl2MHlshg-B-BGOgu',
    'hfa56Ao9WY6l1dGn5-4bQKXYjK0PbZt55jmMUblu1hk-0cVY-x7dRA2K',
    'nwBfOkTu2HrnJ43fvZT7hHZU2xfeaWGakb_WwDWz',
    '-3RLJ3uhfANZYSZTRM27y6_izhzU7brZuYrFBgA8rAc3',
    'ts6ZXWEVUaquJbg4XFj9byjg1tpsTJ-Dp_D8nC1UJDymhFNtkVtfkhkb4YE0',
    'y6YtLYG8yjGrtTgbgZc8VKso89UbylLY',
    'TKa4lmnF4xaKNNSvHAVu7J0l-L7jbF6-i-_iBCFVQOHkzUHjZlvf8vL5d1z1Yr3G',
    'gpDH8b853TSSa1VsK5HB1QnuDIbu8LaxCGjypsR',
    'KfpwXp4DqsfdDFSQbhwKgiQFsIDyfvsRRIL',
    'W9vEZxs5NGziJJUMaUfw7tJXm_vlK',
    'tOcbjQlih6AqPvvFBP_kPnUJ_vIoqiMgm5SpXJek0Yn9dAdUrIEfxmIj4GjNkb0zEVUw',
    '6Jvobsv7AwYGQh71d0HEcM-R6cLdodVRxf7gP',
    'H7b2m0vZKn5rcF5VqpK03mp4mQo-RTHHr1r4bhSn0rYbT3uZC_2',
    'MKID-u2JAyl7M2tDmruafpf7MCjpWkXN8rtvkDUwK7V16l',
    'ss0bWyJKnzWNAsMR6Dpk6TPgdQ0ThWrk0XDxI5BHl_nkT',
    'UKkA6lAtZ9RhmK_3sp7UYNP882CcS7g_NjVmCir-Ts6qu1tpRX',
    'kSqT5zghWFXHv9As_BX9xrTlhmkW1S9eL8fUIxpwemclVakzIfyx4B7',
    'FvCWcwmDoogRqV1-3p5CG8qoRKCeouiHMd59dF852D_PpVngYMZc7Avyx',
    '6lyCfK34SUmaM6femY5tQzC7HZox',
    'xDUItCCVTlNEo5fxXudHPRW_51mctRCFykXepWRkRiB4NMnQUu5iIqNRuWZfdFSmOzTmHMwLL',
    'P5KVosp4TAUJ3BMGHAdX5QtO4_YrJ0J9X2FT4E2ols54Ce5WCPk',
    'cOpKnzITXdS81ci6ciPfq5X-g0rhNHrfL8QFByloT1a6MfHfkHp',
    'v6UNTWRdKfY893Ty52uLKLnyucPaW8YUX81HK35S9Jd1ui',
    'g2tITZ2Fgmyc2JLhjFqpeww8TSWUkcr1mZzg5oJ1etM4Q4_McL',
    '5i6psQ9A2eHT7eQQyNa5m2LD',
    'zmFhVaL0EjeNqZxMo9WFtpA9S-j0Xlebe2QapQ-MpaZA-ZPi',
    'zuHJVp2hHxGUp2E_yfgp7KoA74wwZL6d0oj_JCvK_bz2mXKSxi-',
    'FHJRmGPrTlEjN0qhkbtvcZz4rP1TsjtEK0h3G_41vKSQ',
    'T1KB7jKFxY0oTvhSRh2qVUf6-ShEvdb8ttW0hzNOZTALUB84',
    'HusYutf2pYxbslM-cjicNrPhWRARPQr2QM0',
    'YCj29W4EtnmTHhyUt8b69WUn6yiaLzRsiznDVrhj_xMqxseXT-yw8Ysrv0OrV',
    'jj0qcjW02_ASwu0usiKlcecdYsF5OZpeZgXZWWT',
    'GppFmG5vS1Xkl2c8sHMEzhiPE2cIBnXDL7WW47gLdPB'
]

module.exports = {hashFunction, djb2Hash, strings}