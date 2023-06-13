package app

import (
	"github.com/dustin-ward/space-traders/internal/accounts"
)

func (a *App) GetAccounts() ([]accounts.Account, error) {
	return accounts.GetAccounts()
}
func (a *App) CreateAccount(callsign, faction string) error {
	return accounts.CreateAccount(callsign, faction)
}
func (a *App) ResetAllAccounts() {
	accounts.ResetAllAccounts()
}
