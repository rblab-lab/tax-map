import { expect, describe, it } from 'vitest'
import {countries} from './countries'

[6_000, 10000, 15000, 20_000, 30_000, 40_000, 60_000, 81_000, 100000, 300000].forEach(income => {
	const result = countries.Portugal({incomeUSD: income}, {EUR: 1}).percentage
	console.log(`expect(countries.Portugal({incomeUSD: ${income}}, {EUR: 1}).percentage).toBe(${result})`)
})

describe('Countries', () => {
	it('calculate for Spain', () => {
	  expect(countries.Spain({incomeUSD: 10000}, {EUR: 1}).percentage).toBe(0.19)
	  expect(countries.Spain({incomeUSD: 20000}, {EUR: 1}).percentage).toBe(0.208875)
	  expect(countries.Spain({incomeUSD: 30000}, {EUR: 1}).percentage).toBe(0.23885)
	  expect(countries.Spain({incomeUSD: 40000}, {EUR: 1}).percentage).toBe(0.2625375)
	  expect(countries.Spain({incomeUSD: 100000}, {EUR: 1}).percentage).toBe(0.359015)
	  expect(countries.Spain({incomeUSD: 500000}, {EUR: 1}).percentage).toBe(0.439803)
	})
  
	it('calculate for Portugal', () => {
	  expect(countries.Portugal({incomeUSD: 6000}, {EUR: 1}).percentage).toBe(0.13)
	  expect(countries.Portugal({incomeUSD: 10000}, {EUR: 1}).percentage).toBe(0.14)
	  expect(countries.Portugal({incomeUSD: 15000}, {EUR: 1}).percentage).toBe(0.17)
	  expect(countries.Portugal({incomeUSD: 20000}, {EUR: 1}).percentage).toBe(0.19)
	  expect(countries.Portugal({incomeUSD: 30000}, {EUR: 1}).percentage).toBe(0.22)
	  expect(countries.Portugal({incomeUSD: 40000}, {EUR: 1}).percentage).toBe(0.25)
	  expect(countries.Portugal({incomeUSD: 60000}, {EUR: 1}).percentage).toBe(0.30)
	  expect(countries.Portugal({incomeUSD: 81000}, {EUR: 1}).percentage).toBe(0.33)
	  expect(countries.Portugal({incomeUSD: 100000}, {EUR: 1}).percentage).toBe(0.36)
	  expect(countries.Portugal({incomeUSD: 300000}, {EUR: 1}).percentage).toBe(0.44)
	})
  })
  
