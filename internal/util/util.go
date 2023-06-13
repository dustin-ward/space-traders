package util

import (
	"bytes"
	"io"
	"net/http"
)

const API_LINK = "https://api.spacetraders.io/v2"

func PostRequest(endpoint, body, token string) ([]byte, error) {
	req, err := http.NewRequest("POST", API_LINK+endpoint, bytes.NewBuffer([]byte(body)))
	if err != nil {
		return []byte{}, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return []byte{}, err
	}
	defer resp.Body.Close()
	
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		return []byte{}, err
	}

	return data, nil
}
