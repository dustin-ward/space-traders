package app

import (
	"github.com/dustin-ward/space-traders/internal/accounts"
)

func (a *App) GetAccounts() ([]accounts.Account, error) {
	return accounts.GetAccounts()
}
func (a *App) CreateAccount(callsign, faction string) (string, error) {
	return accounts.CreateAccount(callsign, faction)
}
func (a *App) ResetAllAccounts() error {
	return accounts.ResetAllAccounts()
}
