package app

import (
	"github.com/dustin-ward/space-traders/internal/contracts"
)

func (a *App) GetContracts(token string) ([]contracts.Contract, error) {
	return contracts.GetContracts(token)
}
