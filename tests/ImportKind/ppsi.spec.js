run_spec(__dirname, ['flow'], {
    importOrder: [
      '^[^.@]', '^@', '^[.]',
      '^[^.]', '^[.]',
      '.',
    ],
    importOrderSeparation: true,
    importOrderKind: [
      'value', 'value', 'value',
      'type', 'type',
      'typeof'
    ]
});
